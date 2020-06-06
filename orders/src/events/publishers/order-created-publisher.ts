import { OrderCreatedEvent, Publisher, Subjects } from "@mddreamproject/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent>{
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}