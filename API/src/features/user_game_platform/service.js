import UGPRepository from "./repository.js";

const UGPService = {
  async create(data) {
    return await UGPRepository.create(data);
  },
  async update(data) {
    return await UGPRepository.update(data);
  },
  async delete(id) {
    return await UGPRepository.delete(id);
  },
  async getById(id) {
    return await UGPRepository.getById(id);
  },
  async getAll() {
    return await UGPRepository.getAll();
  },
};

export default UGPService;
