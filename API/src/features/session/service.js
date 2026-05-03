import SessionRepository from "./repository.js";

const SessionService = {
  async create(data) {
    return await SessionRepository.create(data);
  },
  async update(data) {
    return await SessionRepository.update(data);
  },
  async delete(id) {
    return await SessionRepository.delete(id);
  },
  async getById(id) {
    return await SessionRepository.getById(id);
  },
  async getAll() {
    return await SessionRepository.getAll();
  },
};

export default SessionService;
