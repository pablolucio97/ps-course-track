import uuid from 'react-native-uuid';

const generateUuid = () => {
  const id = uuid.v4();
  return id;
};

export { generateUuid };
