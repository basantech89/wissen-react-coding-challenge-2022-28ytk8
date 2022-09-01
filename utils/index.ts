export const getItem = (key: string) => localStorage.getItem(key);
export const setItem = (key: string, value: string) =>
  localStorage.setItem(key, value);

export const removeItem = (key: string) => localStorage.removeItem(key);

export const logout = () => {
  removeItem('token');
  window.location.reload();
};

export const registerForUserInactivitySession = () => {
  setInterval(() => {
    const lastUserActivityTimestamp = getItem('lastUserActivityTimestamp');
    const currentToken = getItem('token');

    if (lastUserActivityTimestamp && currentToken) {
      if (Math.ceil((Date.now() - +lastUserActivityTimestamp) / 60000) > 60) {
        setItem('token', '');
        setItem('lastLoginTimestamp', ``);
        window.location.href = '/';
      }
    }
  }, 60000);
};

export const registerForUserActivityTracking = () => {
  const setUserActivityTimeStamp = () => {
    setItem('lastUserActivityTimestamp', `${Date.now()}`);
  };
  window.document.addEventListener('click', setUserActivityTimeStamp);
  window.document.addEventListener('keypress', setUserActivityTimeStamp);
};
