type SharedData = {
  username: string;
  messages: Message[];
};

type Message = {
  username: string;
  message: string;
}

export default SharedData;
export type { Message };
