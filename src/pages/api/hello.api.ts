import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: string;
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({
    id: '1',
    name: 'Gerry Larios',
  });
}
