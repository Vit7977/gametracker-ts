import PlatformRepository from "./repository.js";

const PlatformService = {
  async createPlatform(data) {
    return await PlatformRepository.createPlatform(data);
  },

  async updatePlatform(data) {
    return await PlatformRepository.updatePlatform(data);
  },

  async deletePlatform(id) {
    return await PlatformRepository.deletePlatform(id);
  },

  async getPlatformById(id) {
    return await PlatformRepository.getPlatformById(id);
  },

  async getAllPlatforms() {
    return await PlatformRepository.getAllPlatforms();
  },
};

export default PlatformService;
