import GameRepository from "./repository.js";

const GameService = {
  async create(data) {
    return await GameRepository.create(data);
  },
  async update(data) {
    return await GameRepository.update(data);
  },

  async delete(id) {
    return await GameRepository.delete(id);
  },

  async getAll() {
    return await GameRepository.getAll();
  },
  async getById(id) {
    return await GameRepository.getById(id);
  },
};

export default GameService;
