import { ExpirationCompleteEvent, Publisher, Subjects } from "@mddreamproject/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}