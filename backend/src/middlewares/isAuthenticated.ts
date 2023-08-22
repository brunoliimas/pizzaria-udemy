import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad {
    sub: string
}


export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    // Receber o Token

    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).end();
    }

    const [, token] = authToken.split(" ")


    try {
        // Validar Token
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as PayLoad;

        // Recuperar o ID do Token e colocar dentro da variavel user_id dentro do req
        req.user_id = sub;

        return next();

    } catch (error) {
        return res.status(401).end();
    }

}