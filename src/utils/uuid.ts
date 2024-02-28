import uuid from 'react-native-uuid';

const generateUuid = () => {
  const id = uuid.v4();
  return String(id);
};

export { generateUuid };
