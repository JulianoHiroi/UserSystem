import ProjectService from "../project.service";
import CreateProjectUseCase from "../../usecases/createProject.usecase";
import UpdateProjectUseCase from "../../usecases/updateProject.usecase";
import DeleteProjectUseCase from "../../usecases/deleteProject.usecase";
import GetProjectUseCase from "../../usecases/getProject.usecase";
import ProjectPrismaRepository from "../../../../infra/repositories/implementations/project.prisma.repository";
import UserPrismaRepository from "../../../../infra/repositories/implementations/user.prisma.repository";
import {
  CreateProjectDTO,
  CreateProjectResponseDTO,
  GetProjectResponseDTO,
  updateProjectDTO,
  updateProjectResponseDTO,
} from "../../@types/projectDTO";

class ProjectServiceDomain implements ProjectService {
  projectPrismaRepository = new ProjectPrismaRepository();
  userPrismaRepository = new UserPrismaRepository();
  createProjectUseCase = new CreateProjectUseCase(
    this.projectPrismaRepository,
    this.userPrismaRepository
  );
  updateProjectUseCase = new UpdateProjectUseCase(this.projectPrismaRepository);
  deleteProjectUseCase = new DeleteProjectUseCase(this.projectPrismaRepository);
  getProjectUseCase = new GetProjectUseCase(this.projectPrismaRepository);

  constructor() {}

  async createProject(
    data: CreateProjectDTO,
    userId: string
  ): Promise<CreateProjectResponseDTO> {
    const project = await this.createProjectUseCase.execute({
      ...data,
      userId,
    });
    return project;
  }
  async getProject(id: string): Promise<GetProjectResponseDTO> {
    const project = await this.getProjectUseCase.execute(id);
    return project;
  }
  async updateProject(
    data: updateProjectDTO
  ): Promise<updateProjectResponseDTO> {
    const project = await this.updateProjectUseCase.execute(data);
    return project;
  }
  async deleteProject(id: string): Promise<any> {
    const project = await this.deleteProjectUseCase.execute(id);
    return project;
  }
}
export default ProjectServiceDomain;
