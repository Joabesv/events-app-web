import { InferSchemaType, Schema, model } from 'mongoose';

const attendantsSchema = new Schema({
  name: String,
  email: String,
  cpf: String,
  balanceEvents: {
    eventId: String,
    balance: Number,
  }
})

const eventSchema = new Schema({
  title: String,
  description: String,
  local: String,
  startTime: String,
  startDate: String,
  eventType: {
    type: String,
    enum: ['paid', 'free']
  },
  attachment: String,
  maxLimit: Number,
  attendants:  attendantsSchema
})

export const EventModel = model('events', eventSchema);