import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // return userAccount;
        return this.login({ email, password });
      } else {
        return;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const user = await this.account.get();
      return user; // Return the user object here
    } catch (error) {
      // You can check for 401 and return null or rethrow
      if (error.code === 401) {
        // No valid session, user not logged in
        return null;
      }
      throw error; // Other errors can be rethrown
    }
  }

  async logout() {
    try {
      await this.account.deleteSession();
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;
