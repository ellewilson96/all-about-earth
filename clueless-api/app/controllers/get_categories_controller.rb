class GetCategoriesController < ApplicationController
def categories
    @resp = Faraday.get 'http://jservice.io/api/clues'
    body = JSON.parse(@resp.body)
    if @resp.success?

      @categories = body.map{|category|
        {id: category["id"],
        title: category["title"],
      }}
      render json: @categories
    else
      @error = body["meta"]["errorDetail"]
    end

  end

end
