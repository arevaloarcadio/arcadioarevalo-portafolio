import { BaseClass } from '../utils'

export class Message extends BaseClass {
    static get tableName () {
        return 'messages'
    }

    /*static relationMappings = () => ({
        option: {
            relation: BaseClass.BelongsToOneRelation,
            modelClass: `${__dirname}/Option`,
            join: {
                from: 'answers.option_id',
                to: 'options.id'
            }
        },
        user: {
            relation: BaseClass.BelongsToOneRelation,
            modelClass: `${__dirname}/User`,
            join: {
                from: 'answers.user_id',
                to: 'users.id'
            }
        },
    })*/
}
