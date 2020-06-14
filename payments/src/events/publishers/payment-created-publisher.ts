import { PaymentCreatedEvent, Publisher, Subjects } from "@mddreamproject/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}