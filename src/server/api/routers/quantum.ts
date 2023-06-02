import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { type EventDescription } from "~/models/eventDescription";

export const quantumRouter = createTRPCRouter({
  getEventDescription: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(() => {
      const eventDescription: EventDescription = {
        introduction:
          "Young IT Professionals are happy to present our next event – this time with the topic Quantum computing and how to work with this mega trend.",
        // agenda: [
        //   "16:30: Opening by KPMG & intro to Quantum Computing by Troels Steenstrup, KPMG",
        //   "17:00: Quantum eco-system and your role in the quantum development by Charlotte Mark, Microsoft",
        //   "17:30: Quantum in practice: use cases (and industry relevance) by Troels Steenstrup, KPMG",
        //   "18:00: Food, drinks & networking",
        //   "20:00: Thank you for today",
        // ],
        agenda: [
          {
            time: "16:30",
            description:
              "Opening by KPMG & intro to Quantum Computing by Troels Steenstrup, KPMG",
          },
          {
            time: "17:00",
            description:
              "Quantum eco-system and your role in the quantum development by Charlotte Mark, Microsoft",
          },
          {
            time: "17:30",
            description:
              "Quantum in practice: use cases (and industry relevance) by Troels Steenstrup, KPMG",
          },
          {
            time: "18:00",
            description: "Food, drinks & networking",
          },
          {
            time: "20:00",
            description: "Thank you for today",
          },
        ],
      };

      return eventDescription;
    }),
});
