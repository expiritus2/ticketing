import { Publisher, Subjects, TicketUpdatedEvent } from "@mddreamproject/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}