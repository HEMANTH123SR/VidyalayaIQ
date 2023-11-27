import { Account, Client, ID } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.APPWRITE_PROJECT_ID);

const account = new Account(client);

const createAccount = async (name, email, password) => {
  try {
    const res = await account.create(ID.unique, email, password, name);
    console.log("appwrite :: createaccount :: response ", res);
    createEmailSeesion(email, password);
  } catch (e) {
    console.log("appwrite :: create account :: error ", e);
  }
};

const createEmailSeesion = async (email, password) => {
  try {
    const res = await account.createEmailSession(email, password);
    console.log("appwrite :: create email session :: res ", res);
    return res;
  } catch (e) {
    console.log("appwrite :: create email session :: error ", e);
  }
};

exports = {
  createAccount,
  createEmailSeesion,
};
