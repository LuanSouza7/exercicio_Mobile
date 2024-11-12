/*
 *   Copyright (c) 2024 
 *   All rights reserved.
 */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#075E54',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#757575',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#075E54',
    paddingVertical: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#25D366',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;