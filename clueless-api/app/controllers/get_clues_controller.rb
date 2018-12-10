class GetCluesController < ApplicationController
def clues
    @resp = Faraday.get 'http://jservice.io/api/clues'
    body = JSON.parse(@resp.body)
    if @resp.success?

      @clues = body.map{|clue|
        {id: clue["id"],
        question: clue["question"],
        answer: clue["answer"],
        value: clue["value"],
        airdate: clue["airdate"],
        category: clue["category"]
      }}
      render json: @clues
    else
      @error = body["meta"]["errorDetail"]
    end

  end

end
