CREATE TABLE "monitor_link_histories" (
	"id" serial PRIMARY KEY NOT NULL,
	"monitor_link_id" integer,
	"status" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "monitor_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"link" text NOT NULL,
	"monitor_area" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "monitor_link_histories" ADD CONSTRAINT "monitor_link_histories_monitor_link_id_monitor_links_id_fk" FOREIGN KEY ("monitor_link_id") REFERENCES "public"."monitor_links"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "monitor_links" ADD CONSTRAINT "monitor_links_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;