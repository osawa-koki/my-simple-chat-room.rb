class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'cable'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def receive(data)
    ActionCable.server.broadcast('cable', data)
  end
end
