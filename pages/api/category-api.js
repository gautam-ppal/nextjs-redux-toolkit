// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const category =  [
        {
            cat_id: 1,
            cat_title:'category'
        },
        {
            cat_id: 2,
            cat_title:'category-title'
        },
        {
            cat_id: 3,
            cat_title:'category-title-3'
        }


    ];
    res.status(200).json({ category: category })
  }
  