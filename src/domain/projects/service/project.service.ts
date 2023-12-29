import {
  CreateProjectRequestDTO,
  CreateProjectResponseDTO,
  GetProjectResponseDTO,
  updateProjectDTO,
  updateProjectResponseDTO,
} from "../@types/projectDTO";

abstract class ProjectService {
  constructor() {}

  abstract createProject(
    data: CreateProjectRequestDTO,
    userId: string
  ): Promise<CreateProjectResponseDTO>;
  abstract getProject(id: string): Promise<GetProjectResponseDTO>;
  abstract updateProject(
    data: updateProjectDTO
  ): Promise<updateProjectResponseDTO>;
  abstract deleteProject(id: string): Promise<void>;
}
export default ProjectService;
