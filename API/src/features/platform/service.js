import PlatformRepository from "./repository.js";

const PlatformService = {
  async create(data) {
    return await PlatformRepository.create(data);
  },

  async update(data) {
    return await PlatformRepository.update(data);
  },

  async delete(id) {
    return await PlatformRepository.delete(id);
  },

  async getAll() {
    return await PlatformRepository.getAll();
  },
  
  async getById(id) {
    return await PlatformRepository.getById(id);
  },
};

export default PlatformService;
