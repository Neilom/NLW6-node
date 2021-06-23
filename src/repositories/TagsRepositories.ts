import { EntityRepository, Repository } from "typeorm"
import { Tag } from "../entities/tag" 

@EntityRepository(Tag)
export class TagsRepositories extends Repository<Tag> {

}