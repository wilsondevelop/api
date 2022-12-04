import { PrismaErrors } from "../errors/prisma.errors";
import { DatabaseError } from "../errors/DatabaseError";
import { PrismaClientError } from "../errors/PrismaClientError";
import { UniqueConstraintError } from "../errors/UniqueConstraintError";

export const handleDatabaseErrors = (e: PrismaClientError): Error => {
  switch (e.code) {
    case PrismaErrors.UniqueConstraintFail:
      return new UniqueConstraintError(e);

    default:
      return new DatabaseError(e.message);
  }
};
