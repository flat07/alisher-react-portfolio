type SkillCardProps = {
  name: string;
  description: string;
};

function SkillCard({ name, description }: SkillCardProps) {
  return (
    <div className="rounded-xl border border-border p-6">
      <h3 className="text-lg font-semibold text-foreground">{name}</h3>

      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

export default SkillCard;
