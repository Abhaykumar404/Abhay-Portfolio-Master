 export type ScheduledMeeting  = {
    _id: string;
    name: string;
    email: string;
    scheduleAt: Date;
    message: string;
    createdAt: Date;
    __v: number;
  }
  


  export type CreateData = {
    name: string;
    email: string;
    scheduleAt: string;
    message: string;
  }
  