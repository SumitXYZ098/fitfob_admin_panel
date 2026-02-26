import zxcvbn from "zxcvbn";

export const passwordSecurity = (
  password: string,
  identifier: string
): string | null => {
  const lowerPassword = password.toLowerCase();

  let base = identifier;

  if (identifier.includes("@")) {
    base = identifier.split("@")[0];
  } else {
    base = identifier.replace(/\D/g, "").slice(-6);
  }

  const lowerBase = base.toLowerCase();

  // Rule 1: Full identifier match
  if (lowerPassword.includes(lowerBase)) {
    return "Password should not contain your email/phone name.";
  }

  // Rule 2: 4+ character similarity
  for (let i = 0; i <= lowerBase.length - 4; i++) {
    const sub = lowerBase.substring(i, i + 4);
    if (lowerPassword.includes(sub)) {
      return "Password too similar to your identifier.";
    }
  }

  // Rule 3: Strong policy
  const strongRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  if (!strongRegex.test(password)) {
    return "Password must contain uppercase, lowercase, number and special character.";
  }

  // Rule 4: Entropy check
  const result = zxcvbn(password);
  if (result.score < 3) {
    return "Weak password. Please choose a stronger one.";
  }

  return null;
};