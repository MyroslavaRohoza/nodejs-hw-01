import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const addOneContact = async () => {
  let createdContactArray = [];
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const parsedData = JSON.parse(data);
    createdContactArray.push(createFakeContact());
    if (parsedData.length > 0) {
      const addedContacts = [...parsedData, ...createdContactArray];
      await fs.writeFile(
        PATH_DB,
        JSON.stringify(addedContacts, null, 2),
        'utf-8',
      );
    } else {
      await fs.writeFile(
        PATH_DB,
        JSON.stringify(createdContactArray, null, 2),
        'utf-8',
      );
    }
};

await addOneContact();
