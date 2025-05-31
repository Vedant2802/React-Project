import conf from "../conf/conf";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appWriteDatabaseID,
        conf.appWriteCollectioID,
        // ID.unique,
        slug,
        {
          title,
          slug,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status, userId }) {
    try {
      return await this.databases.updateDocument(
        conf.appWriteDatabaseID,
        conf.appWriteCollectioID,
        // ID.unique,
        slug,
        {
          title,
          slug,
          content,
          featuredImage,
          status,
          //   userId,
        }
      );
    } catch (error) {
      throw error;
    }
  }
  async deletPost(
    slug,
    { title, slug, content, featuredImage, status, userId }
  ) {
    try {
      await this.databases.deleteDocument(
        conf.appWriteDatabaseID,
        conf.appWriteCollectioID,
        // ID.unique
        slug
        // {
        //   title,
        //   slug,
        //   content,
        //   featuredImage,
        //   status,
        //   //   userId,
        // }
      );
      return true;
    } catch (error) {
      throw error;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appWriteDatabaseID,
        conf.appWriteCollectioID,
        slug
      );
    } catch (error) {
      throw error;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appWriteDatabaseID,
        conf.appWriteCollectioID,
        // [Query.equal("status", "active")]
        queries
      );
    } catch (error) {
      console.log(error);
    }
  }

  // file upload service

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appWriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log(error);
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appWriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  getFilePreview(fileId) {
    try {
      return this.bucket.getFilePreview(conf.appWriteBucketId, fileId);
    } catch (error) {
      console.log(error);
    }
  }
}
const service = new Service();

export default service;
