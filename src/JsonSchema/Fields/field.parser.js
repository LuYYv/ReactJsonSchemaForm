import ObjectField from './ObjectField';
import StringField from './StringField';
import NumberField from './NumberField';
import BooleanField from './BooleanField';
import ArrayField from './ArrayField';

const typeParser = {
    object: ObjectField,
    string: StringField,
    number: NumberField
}

export const getTargetFieldBySchema = (type) => {

}