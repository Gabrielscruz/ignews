import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
    console.log(request.query)
    const users = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Gabriel'},
        {id: 3, name: 'Tami'}
    ]

    return response.json(users)
}