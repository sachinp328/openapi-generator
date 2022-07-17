/**
 * Example
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PetByAge } from './PetByAge';
import { PetByType } from './PetByType';
import { HttpFile } from '../http/http';

export class InlineRequest1 {
    'age': number;
    'nickname'?: string;
    'petType': InlineRequest1PetTypeEnum;
    'hunts'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "age",
            "baseName": "age",
            "type": "number",
            "format": ""
        },
        {
            "name": "nickname",
            "baseName": "nickname",
            "type": "string",
            "format": ""
        },
        {
            "name": "petType",
            "baseName": "pet_type",
            "type": "InlineRequest1PetTypeEnum",
            "format": ""
        },
        {
            "name": "hunts",
            "baseName": "hunts",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineRequest1.attributeTypeMap;
    }

    public constructor() {
    }
}


export type InlineRequest1PetTypeEnum = "Cat" | "Dog" ;
