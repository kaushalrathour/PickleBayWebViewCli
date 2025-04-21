export interface ErrorWithActionType {
    title: string;
    description: string;
    action: ()=> void;
    actionTitle: string;
}