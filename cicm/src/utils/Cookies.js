const readCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (const element of ca) {
      let c = element;
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

export {readCookie};