// postCleanup.js

import mongoose from 'mongoose';
import Prompt from '@models/prompt';

// Function to delete posts older than 30 hours
async function deleteOldPosts() {
  try {
    const thirtyHoursAgo = new Date(Date.now() - 30 * 60 * 60 * 1000); // 30 hours ago

    // Find and delete posts older than 30 hours
    const result = await Prompt.deleteMany({ createdAt: { $lt: thirtyHoursAgo } });

    console.log(`Deleted ${result.deletedCount} posts older than 30 hours.`);
  } catch (error) {
    console.error('Error deleting old posts:', error);
  }
}

export default deleteOldPosts;
