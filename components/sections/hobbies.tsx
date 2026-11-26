import { InstagramIcon, SpotifyIcon } from "@/components/icons";
import { hobbies } from "@/lib/content";
import { Section } from "@/components/ui/section";

export function HobbiesSection() {
  return (
    <Section id="beyond" title={hobbies.title}>
      <div className="grid gap-x-14 gap-y-12 md:grid-cols-2">
        <div>
          <h3 className="type-heading text-[1.5rem] text-foreground">{hobbies.music.title}</h3>
          <p className="mt-3 leading-7 text-muted-foreground">{hobbies.music.description}</p>
          <a
            href={hobbies.music.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link mt-5 inline-flex items-center gap-2 font-semibold"
          >
            <InstagramIcon className="h-4 w-4" />
            {hobbies.music.linkLabel}
          </a>
        </div>

        <div>
          <h3 className="type-heading text-[1.5rem] text-foreground">{hobbies.audio.title}</h3>
          <p className="mt-3 leading-7 text-muted-foreground">{hobbies.audio.description}</p>
          <p className="mt-3 leading-7 text-muted-foreground">
            <span className="font-semibold text-foreground">On repeat: </span>
            {hobbies.audio.artists.join(", ")}
          </p>
          <a
            href={hobbies.audio.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link mt-5 inline-flex items-center gap-2 font-semibold"
          >
            <SpotifyIcon className="h-4 w-4" />
            {hobbies.audio.linkLabel}
          </a>
        </div>
      </div>
    </Section>
  );
}
