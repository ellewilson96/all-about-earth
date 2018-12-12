class GetRandomClueController < ApplicationController
def random_clue
    @resp = Faraday.get 'http://jservice.io/api/random'
    body = JSON.parse(@resp.body)
    if @resp.success?

      @clue = @resp
        {id: @resp["id"],
        question: @resp["question"],
        answer: @resp["answer"],
        value: @resp["value"],
        airdate: @resp["airdate"],
        category: @resp["category"]
      }}
      render json: @clue
    else
      @error = body["meta"]["errorDetail"]
    end

  end

end
