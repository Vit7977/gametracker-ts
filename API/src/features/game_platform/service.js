import GamePlatformRepository from "./repository.js";

const GamePlatformService = {
  async create(data) {
    return await GamePlatformRepository.create(data);
  },
  async update(data) {
    return await GamePlatformRepository.update(data);
  },
  async delete(id){
    return await GamePlatformRepository.delete(id);
  },
  async getById(id) {
    return await GamePlatformRepository.getById(id);
  },
  async getAll(){
    return await GamePlatformRepository.getAll();
  }
};

export default GamePlatformService;
