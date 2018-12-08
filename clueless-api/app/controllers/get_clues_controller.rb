class GetCluesController < ApplicationController
def clues
    @resp = Faraday.get 'http://jservice.io/api/clues'
    body = JSON.parse(@resp.body)
    if @resp.success?

      @clues = body.map{|clue|
        {question: clue["question"],
        answer: clue["answer"],
        value: clue[0]["value"],
        airdate: clue[0]["airdate"],
        category: clue[0]["category"],
      }}
      render json: @clues
    else
      @error = body["meta"]["errorDetail"]
    end

  end

end
