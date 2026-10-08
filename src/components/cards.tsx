import Link from "next/link";
import Image from "next/image";
import {
MonitorSmartphone,
Server,
Layers,
PenTool,
Component,
AppWindow,
CloudUpload,
Braces,
ShoppingBag,
Globe,
ArrowRight,
Clock,
type LucideIcon,
} from "lucide-react";
import type { Service } from "@/lib/data";
import type { BlogPost } from "@/lib/blog";
import { formatDate } from "@/lib/blog";

const serviceIcons: Record<Service["icon"], LucideIcon> = {
monitor: MonitorSmartphone,
server: Server,
layers: Layers,
pen: PenTool,
component: Component,
app: AppWindow,
cloud: CloudUpload,
braces: Braces,
bag: ShoppingBag,
globe: Globe,
};

function getServiceMark(title: string) {
const normalized = title.trim().toLowerCase();

if (normalized.includes("e-commerce")) return "EC";
if (normalized.includes("wordpress")) return "WP";
if (normalized.includes("web application")) return "WA";
if (normalized.includes("ui/ux")) return "UX";
if (normalized.includes("care")) return "CG";

return title
.trim()
.split(/\s+/)
.map((word) => word[0])
.join("")
.slice(0, 2)
.toUpperCase();
}

export function ServiceCard({ service }: { service: Service }) {
const Icon = serviceIcons[service.icon] ?? MonitorSmartphone;
const serviceMark = getServiceMark(service.title);

return ( <article className="card-lift group relative flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-7 hover:border-ink/30 hover:shadow-[0_24px_50px_-24px_rgba(15,13,20,0.25)] sm:p-8"> <span
     className="pointer-events-none absolute right-6 top-6 font-display text-4xl font-bold text-ink/[0.06] transition-colors duration-500 group-hover:text-ink/20"
     aria-hidden="true"
   >
{serviceMark} </span>

```
  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-white transition-colors duration-500 group-hover:bg-white group-hover:text-ink">
    <Icon size={21} aria-hidden="true" />
  </span>

  <p className="mt-6 font-mono text-[0.72rem] font-medium uppercase tracking-[0.24em] text-muted">
    {service.focus}
  </p>

  <h3 className="mt-2.5 font-display text-xl font-bold tracking-[-0.01em] text-ink">
    {service.title}
  </h3>

  <p className="mt-3 text-[0.95rem] leading-relaxed text-body">
    {service.description}
  </p>

  <Link
    href={`/contact?service=${encodeURIComponent(
      service.title.toLowerCase(),
    )}`}
    className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-ink transition-all duration-300 group-hover:gap-3 group-hover:text-muted"
  >
    Scope this solution
    <ArrowRight
      size={15}
      className="transition-transform duration-300 group-hover:translate-x-1"
      aria-hidden="true"
    />
  </Link>
</article>


);
}

export function BlogCard({ post }: { post: BlogPost }) {
return ( <article className="card-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white hover:border-ink/30 hover:shadow-[0_28px_60px_-26px_rgba(15,13,20,0.35)]">
<Link
href={`/blog/${post.slug}`}
className="img-zoom relative block aspect-[16/10]"
tabIndex={-1}
aria-hidden="true"
> <Image
       src={post.image}
       alt={post.imageAlt}
       fill
       sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
       className="object-cover"
     />


    <span className="absolute left-4 top-4 rounded-full bg-white px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink shadow-md backdrop-blur-md">
      {post.category}
    </span>
  </Link>

  <div className="flex flex-1 flex-col p-6 sm:p-7">
    <p className="flex items-center gap-2 text-[0.8rem] font-medium text-body/80">
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <span
        aria-hidden="true"
        className="h-1 w-1 rounded-full bg-body/40"
      />
      <Clock size={13} aria-hidden="true" />
      {post.readingTime}
    </p>

    <h3 className="mt-3 font-display text-[1.3rem] font-bold leading-snug tracking-[-0.01em] text-ink">
      <Link
        href={`/blog/${post.slug}`}
        className="transition-colors group-hover:text-muted"
      >
        {post.title}
      </Link>
    </h3>

    <p className="mt-2.5 text-[0.95rem] leading-relaxed text-body">
      {post.excerpt}
    </p>

    <Link
      href={`/blog/${post.slug}`}
      className="mt-auto inline-flex items-center gap-2 pt-6 font-display text-sm font-bold text-ink transition-all duration-300 group-hover:gap-3 group-hover:text-muted"
      aria-label={`Read article: ${post.title}`}
    >
      Read the insight
      <ArrowRight
        size={15}
        className="transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  </div>
</article>


);
}
