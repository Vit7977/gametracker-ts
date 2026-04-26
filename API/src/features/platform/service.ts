import PlatformRepository from "./repository";
import type { Platform } from "./model";

const PlatformService = {
  async createPlatform(data: Platform) {
    return await PlatformRepository.createPlatform(data);
  },

  async updatePlatform(data: Platform) {
    return await PlatformRepository.updatePlatform(data);
  },

  async deletePlatform(id: number) {
    return await PlatformRepository.deletePlatform(id);
  },

  async getPlatformById(id: number) {
    return await PlatformRepository.getPlatformById(id);
  },

  async getAllPlatforms() {
    return await PlatformRepository.getAllPlatforms();
  },
};

export default PlatformService;
