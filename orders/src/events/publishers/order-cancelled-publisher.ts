import { OrderCancelledEvent, Publisher, Subjects } from '@mddreamproject/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}