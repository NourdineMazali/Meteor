/*
* @Author: nmazali
* @Date:   2018-03-02 12:00:36
* @Last Modified by:   nmazali
* @Last Modified time: 2018-03-02 12:00:49
*/
import { Mongo } from 'meteor/mongo';
export const Tasks = new Mongo.Collection('tasks');
