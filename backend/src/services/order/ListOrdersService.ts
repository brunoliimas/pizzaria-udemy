import prismaClient from "../../prisma";


class ListOrdersService {
    async execute() {
        const orders = prismaClient.order.findMany({
            where: {
                draft: false,
                status: false
            }, 
            orderBy:{
                create_at: 'desc'
            }
        });
        return orders;
    }
}

export { ListOrdersService }