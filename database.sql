
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "feedbacks" (
	"id" SERIAL PRIMARY KEY,
	"color_feedback" INT NOT NULL,
	"text_feedback" TEXT,
	"date" TIMESTAMPTZ NOT NULL DEFAULT now(),
	"user_id" INT REFERENCES "user"
);
