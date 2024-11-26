import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number;
  name: string;
  email: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>  
) {
  const apiUrl = "http://localhost:5000/Comments";  

  if (req.method === "GET") {
    try {
    
      const response = await fetch(apiUrl);
      const comments = await response.json();
      
      
      return res.status(200).json(comments);
    } catch (error) {
      return res.status(500).json({ error: "Error fetching comments." });
    }
  } else if (req.method === "POST") {
    const { name, email, message }: Data = req.body;

 
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    try {
      const newComment: Data = {
        id: Date.now(),  
        name,
        email,
        message,
      };

       
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      });

      if (response.ok) {
       
        return res.status(201).json(newComment);
      } else {
        return res.status(500).json({ error: "Error saving message." });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      return res.status(500).json({ error: "There was an error sending the message." });
    }
  } else {
    
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
